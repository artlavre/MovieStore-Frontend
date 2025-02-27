import {useMultiStepForm} from "../hooks/useMultiStepForm.tsx";
import {FirstStep} from "../hooks/steps/FirstStep.tsx";
import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {ActorsStep} from "../hooks/steps/ActorsStep.tsx";
import {LastStep} from "../hooks/steps/LastStep.tsx";

type AddMovieData = {
    movieCover: File | null,
    title : string,
    description : string,
    language : string,
    rating : number,
    actors : string,
    releaseDate : Date
}

const INITIAL_DATA: AddMovieData = {
    movieCover : null,
    title : "",
    description : "",
    language : "En",
    rating : 5,
    actors : "",
    releaseDate : new Date()
}

const API_BASE_URL = "https://localhost:44343/api";

const API_OPTIONS = {
    method: "POST",
    headers: {
        accept: "application/json",
    }
};

function AddMoviePage() {
    const navigate = useNavigate();
    const [data, setData] = useState(INITIAL_DATA);

    function updateData(newData: Partial<AddMovieData>) {
        setData(prevState => {
            return {...prevState, ...newData};
        })
    }

    const addMovieRequest = async (dataObject: AddMovieData) => {
        try{
            const query = `${API_BASE_URL}/movies`;
            const formData = new FormData();

            formData.append("title", dataObject.title);
            formData.append("description", dataObject.description);
            formData.append("language", dataObject.language);
            formData.append("rating", String(dataObject.rating));

            if (dataObject.movieCover) { // 🔹 Проверяем перед добавлением
                formData.append("movieCover", dataObject.movieCover);
            }

            var response = await fetch(query, {
                method: "POST",
                body: formData,
                headers: {
                    accept: "application/json",
                }
            });

            if(!response.ok){
                throw new Error("Something went wrong!");
            }

            var data = await response.json();

            if(data === null){
                throw new Error("data was not accepted");
            }

            navigate("/");
        }
        catch(error){
            alert(error);
        }
    }

    const {steps, currentStep, step, isFirstStep, isLastStep, back, next} =
        useMultiStepForm([
            <FirstStep {...data} updateFields={updateData}/>,
            <ActorsStep {...data} updateFields={updateData}/>,
            <LastStep {...data} updateFields={updateData}/>]);

    function onSubmit(e: FormEvent) {
        e.preventDefault();
        if(!isLastStep) {
            return next()
        }
        addMovieRequest(data);
    }
    return (
        <div className="add-movie">
            <form onSubmit={onSubmit}>
                <div className="absolute top-2 right-4 font-bold text-xl"> {currentStep + 1} / {steps.length}</div>
                {step}
                <div>
                    {!isFirstStep && <button className="back" type="button" onClick={back}>Back</button>}
                    <button className="next" type="submit">{isLastStep ? "Finish" : "Next"}</button>
                </div>
            </form>
        </div>
    );
}

export default AddMoviePage;