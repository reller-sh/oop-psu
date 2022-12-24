

fun main(args: Array<String>) {

    var re = StringVerse(mutableListOf(1), 12)

    re++
    println(re.source())
    ++re
    println(re.source())
    re++
    re++
    re++
    re++
    re++
    println(re.source())
    println(re[2])
}
