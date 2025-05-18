import { useParams } from "react-router-dom";
import {useEffect} from "react";
import {getDataQuiz} from "../../services/apiService";
import _ from "lodash";
const DetailQuiz = (props) => {
    const params = useParams();
    const quizId = params.id;
    useEffect(() => {
        fetchQuestions();
    }, [quizId]);
    const fetchQuestions = async() => {
        let res = await getDataQuiz(quizId);
        console.log("check data quiz", res);
        if (res && res.EC === 0) {
            let raw = res.DT;
           let data = _.chain(raw)
                .groupBy("id")
                .map((value, key) => {
                        let answers = [];
                        let questionDescription, image = null;
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDescription = item.description;
                            image = item.image;
                        }
                        answers.push(item.answers);
                        console.log('item', item.answers);
                    })
                    console.log("value", value, 'key', key);

                  return  {questionId : key, answers, questionDescription, image}
        }
                )
                .value();
            console.log("check data quiz", data);

        }
    };
    return (
        <div className="detail-quiz-container">
                Detail Quiz
        </div>
    )
}
export default DetailQuiz;