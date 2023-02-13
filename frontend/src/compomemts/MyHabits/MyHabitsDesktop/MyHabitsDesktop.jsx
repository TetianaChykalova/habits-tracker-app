import React, {useEffect} from 'react';
import s from '../../../scss/MyHabits/MyHabitsDesktop.module.scss'
import add from '../../../img/add.png'
import Goal from "../Goal/Goal";
import {getGoals} from "../Goal/GoalsSlice";
import {useDispatch, useSelector} from "react-redux";

function MyHabitsDesktop(props) {

    const goalState = useSelector(state => state.goals);
    const {goalsList} = goalState;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGoals())
    }, [dispatch])

    return (
        <div className={s.wrapper}>
            <div className={s.nav}>
                <h2>Ціль</h2>
                <div className={s.goals}>
                    {goalsList && goalsList.map(goal => <Goal goal={goal} key={goal.name}/>)}
                </div>
                <button className={s.button}>
                    <img src={add} alt=""/>
                    додати ціль
                </button>
            </div>
            <div className={s.field}>
                Field
            </div>
        </div>
    );
}

export default MyHabitsDesktop;