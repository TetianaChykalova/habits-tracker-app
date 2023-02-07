import React from 'react';
import s from '../../../scss/MyHabits/MyHabitsDesktop.module.scss'
import add from '../../../img/add.png'
import Goal from "../Goal/Goal";

function MyHabitsDesktop(props) {

    const allGoals = [
        {id: '0', name: 'Спорт'},
        {id: '1', name: 'Навчання'},
        {id: '2', name: "Сім’я"},
        {id: '3', name: 'Відпочинок'},
    ]

    return (
        <div className={s.wrapper}>
            <div className={s.nav}>
                <h2>Ціль</h2>
                <div className={s.goals}>
                    {allGoals.map(goal => <Goal goal={goal} key={goal.name}/>)}
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