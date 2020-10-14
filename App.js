import React from 'react'
import Input from './input'

function App() {
    return(
        <div className='container'>
                
                    
                    <Input 
                        type='text'
                        text= {`<Input />`}
                        label='Label'
                        placeholder='Placeholder' 
                    />
                
            
                <Input 
                    type='text'
                    text= {`<Input error />`}
                    label='Label'
                    placeholder='Placeholder' 
                    error="error"
                />
            
                <Input 
                    type='text'
                    text= {`<Input disabled />`}
                    label='Label'
                    placeholder='Placeholder'
                    disabled
                />

                <div>
                    <Input 
                        type='text'
                        text= {`<Input helperText= 'Some interesting text' />`}
                        label='Label'
                        placeholder='Placeholder'
                        helperText= 'Some interesting text'
                    />

                    <Input 
                        type='text'
                        text= {`<Input helperText= 'Some interesting text' error />`}
                        label='Label'
                        placeholder='Placeholder'
                        helperText= 'Some interesting text'
                        error='error'
                    />
                </div>
                <div>
                    <Input 
                        type='text'
                        text= {`<Input startIcon />`}
                        label='Label'
                        placeholder='Placeholder' 
                        startIcon= 'IconSearch'
                    />
                    <Input 
                        type='text'
                        text= {`<Input endIcon/>`}
                        label='Label'
                        placeholder='Placeholder' 
                        endIcon= 'IconSearch'
                    />
                </div>
                <Input 
                    type='text'
                    text= {`<Input value= 'text' />`}
                    label='Label'
                    placeholder='Placeholder' 
                    value= 'Text'
                />
                <div>
                    <Input 
                        type='text'
                        text= {`<Input size= 'sm' />`}
                        label='Label'
                        placeholder='Placeholder' 
                        size='sm'
                    />
                    <Input
                        type='text' 
                        text= {`<Input size= 'md' />`}
                        label='Label'
                        placeholder='Placeholder' 
                        size='md'
                    />
                </div>
                <Input 
                    type='text'
                    text= {`<Input fullwidth />`}
                    label='Label'
                    placeholder='Placeholder' 
                    size='fullwidth'
                />
                <Input 
                    type='textarea'
                    text= {`<Input multiline row='4' />`}
                    label='Label'
                    placeholder='Placeholder' 
                    row='4'
                />
        </div>
    )
}

export default App