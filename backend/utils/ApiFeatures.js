class APIFeatures {
    constructor(query, querystr) {
        this.query = query;
        this.querystr = querystr;
    }

    search(){
        let keyword = this.querystr.keyword ? {
            $or: [
              { name: { $regex: this.querystr.keyword, $options: 'i' } },
              { location: { $regex: this.querystr.keyword, $options: 'i' } }
            ]
          } : {};

        this.query.find({...keyword})
        return this;
    }


    paginate(resPerPage){
        const currentPage = Number(this.querystr.page) || 1;
        const skip = resPerPage * (currentPage - 1);
        this.query.limit(resPerPage).skip(skip);
        return this;


    }
}

module.exports = APIFeatures;