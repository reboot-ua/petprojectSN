import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from './ProfileInfo.module.css';
import style from "../../common/FormsControls/FormsControls.module.css";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>Save</button></div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <b>Full name:</b> {createField("FullName", "fullName", [], Input)}
        </div>
        <div>
            <b>About me :</b> {createField("About Me", "aboutMe", [], Textarea)}
        </div>
        <div>
            <b>Looking for a job :</b> {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        <div>
            <b>Professional skills</b> {createField("Professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>

        <div>
            <div>
                <b>Contacts</b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key} : {createField(key, "contacts." + key, [], Input)}</b>
                </div>
            })}
            </div>
        </div>
    </form>
}

const ProfileReduxDataForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileReduxDataForm