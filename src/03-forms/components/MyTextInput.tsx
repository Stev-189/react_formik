import { ErrorMessage, useField } from 'formik';

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    //para que vengan mas props
    [x: string]: any;
}


export const MyTextInput = ( { label, ...props }: Props ) => {

    //F1
    //const [field, meta] = useField(props);

    //F2
    const [ field ] = useField(props)

    return (
        <>
            <label htmlFor={ props.id || props.name }>{ label }</label>
            <input className="text-input" { ...field } { ...props } />
            
            {
                //F1
                //meta.touched && meta.error &&(<span className="error">{ meta.error }</span>)

                //F2
            }
            <ErrorMessage name={ props.name } component="span" className='puedes agregar cualquier clase nombre'/>
        </>
    )
}
