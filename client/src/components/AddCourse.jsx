import React from 'react'

const AddCourse = () => {
    return (
        <div className="mb-4">
            <form action="">
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="code"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="title"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="dept"/>
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" placeholder="credit"/>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default AddCourse;