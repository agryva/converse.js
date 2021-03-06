import { html } from "lit-html";
import { __ } from '@converse/headless/i18n';

const i18n_heading = __('This groupchat requires a password');
const i18n_password = __('Password: ');
const i18n_submit = __('Submit');


export default (o) => html`
    <form class="converse-form chatroom-form converse-centered-form" @submit=${o.submitPassword}>
        <fieldset class="form-group">
            <label>${i18n_heading}</label>
            <p class="validation-message">${o.validation_message}</p>
            <input class="hidden-username" type="text" autocomplete="username" value="${o.jid}"></input>
            <input type="password"
                   name="password"
                   required="required"
                   class="form-control ${o.validation_message ? 'error': ''}"
                   placeholder="${i18n_password}"/>
        </fieldset>
        <fieldset class="form-group">
            <input class="btn btn-primary" type="submit" value="${i18n_submit}"/>
        </fieldset>
    </form>
`;
