import Framework from "@rbxts/lumin-framework"

function Init(): void
{
    print("Init test")
}

function Start(): void
{
    print("Start test")
}

export default Framework.New({
    Init: Init,
    Start: Start,
})
