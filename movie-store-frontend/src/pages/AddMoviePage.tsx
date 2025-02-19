import {useMultiStepForm} from "../hooks/useMultiStepForm.tsx";
import {FirstStep} from "../steps/FirstStep.tsx";
function AddMoviePage() {
    const {steps, currentStep, step, isFirstStep, isLastStep, back, next} = useMultiStepForm([<FirstStep/>]);

    return (
        <div className="add-movie">
            <form>
                <div className="absolute top-2 right-4 font-bold text-xl"> {currentStep + 1} / {steps.length}</div>
                {step}
                <div>
                    {!isFirstStep && <button className="back" type="button" onClick={back}>Back</button>}
                    {!isLastStep && <button className="next" type="button" onClick={next}>Next</button>}
                    {isLastStep && <button className="next" type="submit">Finish</button>}
                </div>
            </form>
        </div>
    );
}

export default AddMoviePage;