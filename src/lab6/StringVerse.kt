interface IStringVerse{
    operator fun get(index: Int): Int?

    operator fun inc(): IStringVerse
}

class StringVerse(s: MutableList<Int>, ms: Int) : IStringVerse {

    private var source = s
    private var maxSize = ms


    fun source (): MutableList<Int> {
        return source
    }
    override fun get(index: Int): Int? {
        if (index in 0..source.size) {
            return source.getOrNull(index)
        }
        throw IllegalArgumentException("Index out of Range")
    }

    override fun inc(): StringVerse {
        if (source.size >= maxSize) {
            throw IllegalArgumentException("")
        }
        val nw = StringVerse(mutableListOf(), 0)

        nw.maxSize = this.maxSize
        nw.source = this.source
        nw.source.add((0..100).random())
        return  nw
    }
}
