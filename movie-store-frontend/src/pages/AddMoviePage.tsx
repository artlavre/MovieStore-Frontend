import {useMultiStepForm} from "../hooks/useMultiStepForm.tsx";
import {FirstStep} from "../hooks/steps/FirstStep.tsx";
import {FormEvent} from "react";
import {useNavigate} from "react-router-dom";
import {ActorsStep} from "../hooks/steps/ActorsStep.tsx";
import {LastStep} from "../hooks/steps/LastStep.tsx";
import addMovieStore from "../stores/movies/addMovieStore.ts";
import {toast} from "react-toastify";

function AddMoviePage() {
    const navigate = useNavigate();

    const {steps, currentStep, step, isFirstStep, isLastStep, back, next} =
        useMultiStepForm([
            <FirstStep />,
            <ActorsStep />,
            <LastStep />]);

    async function onSubmit(e: FormEvent) {
        e.preventDefault();
        if(!isLastStep) {
            return next()
        }

        toast.error("Movie added failed");
        await addMovieStore.addMovie();

        if(addMovieStore.state === "done") {
            toast.done("Movie added successfully.");
            navigate("/");
            return;
        }

        if(addMovieStore.state === "error") {
            toast.error("Movie added failed");
            return;
        }
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