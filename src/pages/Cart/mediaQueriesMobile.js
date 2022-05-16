import styled from "styled-components"

import { Container, CartLeftCol, CartRightCol } from "./style"
export const MediaQueriesMobile = styled.div`
    @media (max-width: 800px) {
        ${Container}{
            flex-direction: column;
            align-items: center;
            padding: 0 25px;
        }

        ${CartLeftCol}{

            height: 250px;
            border-radius: 10px;
            padding: 0 25px;
            border: 2px solid #0a1405;

            .header{
                background-color: #0a1405;
                width: 100%;
                padding-left: 15px;
            }

            .body{
                overflow-y: scroll;
                height: 150px;
                padding: 0 25px;
            }
        }

        ${CartRightCol}{
            max-width: none;
            border-radius: 0;
            position: fixed;
            bottom: 0;
            box-sizing: content-box;

            .TotalContainer{
                justify-content: center;
                height: 50px;


                p + p{
                    margin-right: 15px;
                }
            }
        }
    }

`