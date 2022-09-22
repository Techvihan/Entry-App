import React, { memo } from "react";
import Button from "./Button";
import H3 from "./H3";
import Input from "./Input";
function EntryForm() {
    return (
        <div className="h-screen bg-gray-300 flex justify-center items-center px-4 sm:px-36">
            <div className="border-4 border-blue-700 w-screen rounded-2xl bg-indigo-300 px-10 py-24 ">
                <div className="flex justify-between space-x-10">
                    <H3>Name : </H3>
                    <Input placeholder="Full Name" ></Input>
                </div>
                <div className="flex justify-between  space-x-10">
                    <H3>Mobile No. : </H3>
                    <Input placeholder="Mobile Number"></Input>
                </div>
                <div className="flex justify-between  space-x-10">
                    <H3>Address : </H3>
                    <Input placeholder="Address"></Input>
                </div>
                <div className="flex justify-between  space-x-10">
                    <H3>Email : </H3>
                    <Input placeholder="Email Id"></Input>
                </div>
                <div className="flex mt-10 space-x-10 justify-center items-center ">
                    <Button theme="cancle" type="reset">Cancle</Button>
                    <Button type="submit">Save</Button>
                </div>
            </div>
        </div>

    );
}
export default memo(EntryForm)