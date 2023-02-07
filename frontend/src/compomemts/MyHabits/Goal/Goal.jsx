import React from 'react';
import s from '../../../scss/MyHabits/MyHabitsDesktop.module.scss'
import del from '../../../img/delete.png'
import edit from '../../../img/edit.png'

function Goal(props) {
    return (
        <div className={s.goal}>
            <div className={s.content}>
                <p>
                    {props.goal.name}
                </p>
                <div>
                    <button>
                        <img src={edit} alt=""/>
                    </button>
                    <button>
                        <img src={del} alt=""/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Goal;