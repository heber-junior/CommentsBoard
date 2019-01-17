import React from 'react'
import Comment from './Comment'
import { render } from 'enzyme'

it ('should render', () => {
    const comment = {
        'comment': 'Meu comentário de teste'
    }
    const wrapper = render( <Comment comment={comment}/> )
    expect(wrapper.text()).toBe('Comentário: Meu comentário de teste')
})