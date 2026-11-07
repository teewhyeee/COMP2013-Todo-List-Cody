//A form component that will have a text input for todo title
//and button to submit the todo
//later will be used to edit todos as well

import type { FormComponentProps } from "./TodoApp";

export default function FormComponent({ 
    title, 
    handleFormOnChange, 
    handleOnSubmit 
}: FormComponentProps) {

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="title">Title</label>
                <input 
                type="text" 
                name="title" 
                id="title" 
                value={title} 
                onChange={handleFormOnChange} />
                <button>Submit</button>
            </form>

        </div>
    );

}