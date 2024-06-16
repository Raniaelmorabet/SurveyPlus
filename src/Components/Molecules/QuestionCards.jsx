import React, { useState,useEffect, useCallback, useContext  } from "react";
import { Button } from "../Atoms/Button";
import Input from "../Atoms/Input";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import Data_Context from "../../Context/dataContext";
import {MdDeleteForever} from "react-icons/md";

function QuestionCards({ deleteCard, i }) {

  const {
    setQuestion,
    setTitleQuestionCtx,
    optionCtx,
    setOptionCtx
  } = useContext(Data_Context);
  const [titleQuestion,setTitleQuestion] = useState()
  const [option,setOption] = useState( [{}])

  useEffect(() => {
    let id = uuidv4();
    setQuestion((prev) => {
      let newQuestions = [...prev];
      setTitleQuestionCtx(titleQuestion)
      setOptionCtx(option)
      newQuestions[i] = {
        id,
        title: titleQuestion,
        options: option,
      };
      return newQuestions;
    });
  }, [titleQuestion, option, i]);


  const deleteIt = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to see this Question!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your Question has been deleted.",
          icon: "success",
        });
        deleteCard();

      }
    });
  };

  const addOption = () => {
    setOption([...option, { name: "", checked: 0 }]);
    setOptionCtx([...option, { name: "", checked: 0 }])
  };
  const delOption = (i) => {
    setOption(option.filter((_,il)=>il !== i));
    setOptionCtx(option.filter((_,il)=>il !== i))
  };


  const handleOptionChange = (index, value) => {
    const updatedOptions = [...option];
    updatedOptions[index] = { name: value, checked: 0 };
    setOption(updatedOptions);
    setOptionCtx(updatedOptions);

  };
  return (
      <div className="custom-card my-2">
        <div className="bg-[#5EB7BF]/40 rounded-lg pb-3">
          <div className="px-[41px] py-5 justify-around">
            <Input
                value={titleQuestion}
                SetTitle={(e) => {
                  {
                    setTitleQuestion(e.target.value)
                    setTitleQuestionCtx(e.target.value)
                  }
                }}
                paddigY="p-3"
                raduis="rounded-lg"
                w="w-[500px]"
                placeholder="Enter your Question"
            />
          </div>

          <div className="ml-[40px] pb-3">
            <Button
                addnewComponent={addOption}
                paddingY="py-3"
                paddingX="px-6"
                bgColor="bg-ourGreen"
            >
              Add Option
            </Button>
            {option.map((o, index) => (
                <div className=" flex mt-4" key={index}>
                  <Input
                      key={index}
                      value={o.name}
                      SetTitle={(e) => handleOptionChange(index, e.target.value)}
                      w="w-[310px]"
                      paddigY="py-2"
                      raduis="rounded-lg"
                      placeholder="Enter option"
                  />
                  <MdDeleteForever size={35} className='mt-[4px] cursor-pointer' onClick={()=>delOption(index)}/>
                </div>
            ))}
          </div>
          <div className="flex justify-between">
            <div className="ml-[730px]">
              <Button
                  addnewComponent={deleteIt}
                  paddingY="py-3"
                  paddingX="px-6"
                  bgColor="bg-red-700"
              >
                Delete Question
              </Button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default QuestionCards;
