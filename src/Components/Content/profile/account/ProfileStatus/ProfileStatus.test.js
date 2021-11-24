import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile status component", () => {
    test("Status should be in state", () => {
        const component = create(<ProfileStatus status="someStatus" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("someStatus");
    });

    test("after creation span with status  should be displayed", () => {
        const component = create(<ProfileStatus status="someStatus" />);
        const root = component.root;
        let span =  root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after creation span with status  should contains correct status ", () => {
        const component = create(<ProfileStatus status="someStatus" />);
        const root = component.root;
        let span =  root.findByType("span");
        expect(span.children[0]).toBe("someStatus");
    });
    test("after creation input shouldn't be displayed ", () => {
        const component = create(<ProfileStatus status="someStatus" />);
        const root = component.root;
        expect(() => {
            let input =  root.findByType("input");
        }).toThrow();
    });
    test("input should be displayed in edit mode", () => {
        const component = create(<ProfileStatus status="someStatus" />);
        const root = component.root;
        let span =  root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input")
        expect(input.props.value).toBe("someStatus")
    });
    test("callback should be called", () => {
        const mockCallBack = jest.fn();
        const component = create(<ProfileStatus status="someStatus" updateStatus={mockCallBack}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallBack.mock.calls.length).toBe(1)

    });
});