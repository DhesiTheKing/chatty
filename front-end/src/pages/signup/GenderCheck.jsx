import React from 'react'

const GenderCheck = ({onCheckGender,selectedGender}) => {
  return (
    <div className='flex'>

        <div className="form-control">
            <label className={`label gap-2 cursor-pointer text-white ${selectedGender === "male" ? "selected" : ""}`}>
                <span className="label-text p-3 text-white">male</span> 
                <input type="checkbox" className="checkbox outline outline-neutral-400"
                checked={selectedGender === "male"}
                onChange={()=>onCheckGender("male")}
                />
            </label>
        </div>

        <div className="form-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
                <span className="label-text p-3 text-white">female</span> 
                <input type="checkbox"  className="checkbox outline outline-neutral-400 outline"
                checked={selectedGender === "female"}
                onChange={()=>onCheckGender("female")}
                />
            </label>
        </div>

    </div>
  )
}

export default GenderCheck
