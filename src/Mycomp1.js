import React from "react";
import './Mycomp1.css';
function Parent(){
    return(
        <center><table border={[1]}>
            <tr>
                <th> S.NO</th>
                <th> PROUDUCT NAME</th>
                <th> RATE</th>
            </tr>
            
            <Column/>
            
            
        </table></center>
    )
}
function Column(){
    return(
        <>
        <tr>
        <td>1</td>
        <td>Treat orange</td>
        <td>25</td>
        </tr>

        <tr>
        <td>2</td>
        <td>Treat Chocolate</td>
        <td>25</td>
        </tr>

        <tr>
        <td>3</td>
        <td>Treat Strawberry</td>
        <td>25</td>
        </tr>

        <tr>
        <td>4</td>
        <td>Treat Pineapple</td>
        <td>25</td>
        </tr>

        </>
    )
}

export {Parent,Column}