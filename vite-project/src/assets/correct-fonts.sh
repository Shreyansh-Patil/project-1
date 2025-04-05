dir=$1

replaceCommas() {
    file=$1
    str=""
    for ((i = 0; i < ${#file}; i++)); do
        # echo "Processing letter ${file:i:1}"
        if [[ ${file:i:1} == ',' ]]; then
            # echo "$file and ${file:i:1}"
            str="$str-"
            # echo $file
        else
            str="$str${file:i:1}"
        fi
    done
    echo $str
    (mv $file $str)
}

export -f replaceCommas

find "$1" -name "*,*" -exec bash -c 'replaceCommas $0' {} \;