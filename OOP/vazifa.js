const FuncJS = {
    private: true,
    visibleDB: ()=>{
        FuncJS.private = !FuncJS.private;
    },
};
FuncJS.visibleDB();
console.log(FuncJS.private);