import React from 'react'
import Comments from './Comments'
import Comment from './Comment'
import { shallow } from 'enzyme'

it('Should render 3 comment', () => {
    const c = {
        a: {comment: 'Comment 1'},
        b: {comment: 'Comment 2'},
        c: {comment: 'Comment 3'}
    }
    const wrapper = shallow(<Comments comments={c} />)
    expect(wrapper.find(<Comment />).Lenght = 3)
})