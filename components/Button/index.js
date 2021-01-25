import { colors } from '../../styles/themes'

export default function Button ({ children, onClick }) {
  return (
        <>
            <button onClick={onClick}>{
                children}
            </button>
            <style jsx>{`
                button{          
                    background:${colors.black};
                    border:0;
                    color:${colors.white};
                    border-radius:9999px;
                    font-weight:800;
                    padding:8px 24px;
                    cursor:pointer;
                    transition:opacity .3s ease;
                }

                button:focus{
                    outline:none;
                }

                button:hover{
                    opacity:.9;
                }
            `}
            </style>
        </>
  )
}
