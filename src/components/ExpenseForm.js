import React from 'react';
import {MdSend} from "react-icons/md";

const ExpenseForm = ({charge, amount, handleCharge, handleAmount, handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <div className="form-center">
            <div className="form-group">
                <label htmlFor="charge">Charge</label>
                <input 
                    type="text" 
                    className="form-control"
                    id="charge"
                    name="charge"
                    placeholder="e.g rent"
                    value={charge}
                    onClick={handleCharge}
                />
            </div>

            <div className="form-group">
                <label htmlFor="camount">Charge</label>
                <input 
                    type="number" 
                    className="form-control"
                    id="amount"
                    name="amount"
                    placeholder="e.g 100"
                    value={amount}
                    onClick={handleAmount}
                />
            </div>
        </div>
        <button type="submit" className="btn">
            submit
            <MdSend className="btn-icon"/>
        </button> 
        
    </form>
}

export default ExpenseForm;