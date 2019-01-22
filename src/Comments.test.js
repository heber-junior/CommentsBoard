import React from 'react'
import { shallow } from 'enzyme'
import Comments from './Comments'
import Comment from './Comment'

it('Should render 3 comment', () => {
    const comments = {
        a: {id: 'a', comment: 'Comment 1'},
        b: {comment: 'Comment 2'}
    }
    const wrapper = shallow(<Comments comments={comments} />)

    expect(wrapper.find(Comment).length).toBe(2)
    expect(wrapper.find(Comment).get(0).props.comment).toBe(comments.a)
    expect(wrapper.find(Comment).get(1).props.comment).toBe(comments.b)
    expect(wrapper.find(Comment).get(0).key).toBe('a')
    expect(wrapper.find(Comment).get(1).key).toBe('b')
})

it('Should work with no Comments', () => {
    const comments = {}
    const wrapper = shallow(<Comments comments={comments} />)

    expect(wrapper.find(Comment).length).toBe(0)
})