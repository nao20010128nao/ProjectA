class Interpreter {
    public static COMMANDS: Command[] = [];
    public evaluate(code: string) {
    }
}


//////////////////////////////////////////////////////////////////
class Command {
    public onCommand(args: string[]): boolean { return true; }
}
class PlayerCommand extends Command {
    public onCommand(args: string[]): boolean {
        switch (args[0]) {
            case "kill":
                break;
        }
    }
}
Interpreter.COMMANDS.push(new PlayerCommand());