import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile status component", () => {
    test("status in props should be in the state", () => {
        const component = create(<ProfileStatus status="Nice Work"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Nice Work");
    });
    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status="Nice Work"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after creation <input> should not be displayed", () => {
        const component = create(<ProfileStatus status="Nice Work"/>);
        const root = component.root;
        expect(() => {
          root.findByType("input");
        }).toThrow();
    });
    test("after creation span should be displayed with correct status ", () => {
        const component = create(<ProfileStatus status="Nice Work"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("Nice Work");
    });
    test("Input should be displayed in EditMode", () => {
        const component = create(<ProfileStatus status="Nice Work"/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value) .toBe("Nice Work");
    });
    test("callback should be called", () => {
        const mockCallBack = jest.fn();
        const component = create(<ProfileStatus status="Nice Work" updateStatus={mockCallBack}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallBack.mock.calls.length) .toBe(1);
    });
});