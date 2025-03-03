import {useMultiStepForm} from "../hooks/useMultiStepForm.tsx";
import {FirstStep} from "../hooks/steps/FirstStep.tsx";
import {FormEvent} from "react";
import {useNavigate} from "react-router-dom";
import {ActorsStep} from "../hooks/steps/ActorsStep.tsx";
import {LastStep} from "../hooks/steps/LastStep.tsx";
import {api} from "../api/api.ts";
import addMovieStore from "../stores/movies/addMovieStore.tsx";
import {AddMovieData} from "../types/AddMovie.ts";

function AddMoviePage() {
    const navigate = useNavigate();

    const addMovieRequest = async (dataObject: AddMovieData) => {
        try{
            const formData = new FormData();

            formData.append("title", dataObject.title);
            formData.append("description", dataObject.description);
            formData.append("language", dataObject.language);
            formData.append("rating", String(dataObject.rating));

            if (dataObject.movieCover) { // 🔹 Проверяем перед добавлением
                formData.append("movieCover", dataObject.movieCover);
            }

            const response = await api.post("/movies", formData);

            if(response.status !== 200){
                throw new Error("Something went wrong!");
            }

            const data = response.data;

            if(data === ''){
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
            <FirstStep {...addMovieStore.movie}/>,
            <ActorsStep {...addMovieStore.movie}/>,
            <LastStep {...addMovieStore.movie}/>]);

    async function onSubmit(e: FormEvent) {
        e.preventDefault();
        if(!isLastStep) {
            return next()
        }
        await addMovieRequest(addMovieStore.movie);
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