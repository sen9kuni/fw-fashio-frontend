import React, {useState} from 'react'
import { ButtonGroup, ToggleButton } from 'react-bootstrap'

function Colors() {
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Active', value: '1' },
        { name: 'Radio', value: '2' },
        { name: 'Radio', value: '3' },
        { name: 'Radio', value: '4' },
      ];

    return (
        <div className='d-flex flex-column mb-4'>
                        <span className='fash-h4'>color</span>
                        <div>
                            <ButtonGroup>
                                {radios.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`radio-${idx}`}
                                    type="radio"
                                    variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                                    name="radio"
                                    value={radio.value}
                                    checked={radioValue === radio.value}
                                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                                >
                                    {radio.name}
                                </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </div>
                    </div>
    )
}

export default Colors
