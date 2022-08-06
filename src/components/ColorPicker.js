
import { ChromePicker } from "react-color"
import React from "react"

const ColorPicker = () => {
    const [color, setColor] = React.useState('#fff')
    const [showPicker, setShowPicker] = React.useState(false)
    return(
        <>
            <div className="d-flex gap-3">
                <div>
                    <button onClick={() => setShowPicker(showPicker => !showPicker)}>{showPicker? 'Pick':'Close'}</button>
                    {
                        showPicker && <ChromePicker color={color} onChange={changeColor => setColor(changeColor.hex)} />
                    }
                </div>
                <span style={{backgroundColor: color}}>{color}</span>
            </div>
        </>
    )
}

export default ColorPicker