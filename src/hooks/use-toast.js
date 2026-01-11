import * as React from 'react'; //imports React so we can use hooks like useState and useEffect.

const TOAST_LIMIT =1; //Maximum number of toasts that can be shown at once. Here, it’s 1.
const TOAST_REMOVE_DELAY =1000000; //Time in milliseconds before a toast is automatically removed. It’s 1000000 ms (~16 minutes), which seems intentionally large for testing.

let count =0; 

function genId() //generates a unique string ID for each toast
{
    count =(count +1) % Number.MAX_SAFE_INTEGER; //keeps track of how many toasts have been created.
    return count.toString();
}
const toastTimeouts =new Map();

const addToRemoveQueue = (toastId) => {
    if(toastTimeouts.has(toastId))
    {
        return;
    }
    const timeout = setTimeout(() => {
        toastTimeouts.delete(toastId);
        dispatchEvent({
            type: 'REMOVE_TOAST',
            toastId :toastId,
        });
    }, TOAST_REMOVE_DELAY);

    toastTimeouts.set(toastId, timeout);
};

const reducer = (state , action) => {
    switch(action.type){
        case "ADD_TOAST" :
            return {
                ...state,
                toasts : [action.toast , ...state.toasts].slice(0,TOAST_LIMIT),
            };

        case "UPDATE_TOAST":
            return {
                ...state ,
                toast : state.toasts.map((t) =>
                t.id === action.toast.id ? {
                    ...t, ...action.toast }
                : t ),
            };

        case "DISMISS_TOAST":  {
            const { toastId } = action ;

            if(toastId){
                addToRemoveQueue(toastId);
            } 
            else {
                state.toasts.forEach((toast) => {
                addToRemoveQueue(toast.id)
                });
            }

            return {
                ...state , 
                toasts : state.toast.map((t) => 
                t.id === toastId || toastId === undefined 
                ? {
                    ...t,
                    open: false ,
                }
                :t 
            ),
        };
    }
    case "REMOVE_TOAST":
        if(action.toastId === undefined) {
            return {
                ...state, 
                toasts :[],
            };
        }
        return {
            ...state ,
            toasts : state.toasts.filter((t) => t.id !== action.toastId),
        };
    }
};    
    const listeners =[];

    let memoryState = { toasts :[] };

    function dispatch(action){
        memoryState = reducer(memoryState , action);
        listeners.forEach((listener) => {
            listener(memoryState);
        });
    }

function toast(props) {
    const id = genId();

    const update = (props)=>
        dispatch ({
            type : "UPDATE_TOAST",
            toast: {...props , id },

        });
        const dismiss =() => dispatch ({ type : "DISMISS_TOAST" , toast_id : id });

        dispatch ({
            type : "ADD_TOAST",
            toast : {
                ...props , 
                id,
                open: true, 
                onOpenChange : (open)=> {
                    if(!open)
                        dismiss();
                },
            },
        });
return {
    id : id ,
    dismiss , 
    update ,
  };
}
function useToast() {
    const [state, setState] = React.useState(memoryState);

    React.useEffect(() => {
        listeners.push(setState);
        return () => {
            const index = listeners.indexOf(setState);
    if(index > -1) {
        listeners.splice(index , 1);
        }
    };
}, [state]);
return {
    ...state , 
    toast ,
    dismiss : (toastId) => dispatch({
        type: "DISMISS_TOAST",
        toastId
    }),
};
}
export { useToast , toast };