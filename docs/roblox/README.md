# Trick

- Change objects label

```lua
local clone = workspace.Checkpoints["1"].SurfaceGui 
for i, v in pairs(workspace.Checkpoints:GetChildren()) do 
    if v:IsA("Part") then 
        local newGui = clone:Clone() 
        newGui.Parent = v 
        newGui.TextLabel.Text = v.Name 
    end 
end
```