    
        $(document).ready(function () {
            $('#search-term').submit(function (event) {
                event.preventDefault();
                var searchTerm = $('#dish').val();
                getRequest(searchTerm);
                console.log(searchTerm)
            });
        });

        function getRequest(searchTerm) {
            url = 'https://www.googleapis.com/youtube/v3/search';
            var params = {
                part: 'snippet',
                type: 'video',
                key: 'AIzaSyCK7Boto_Tp17FtiXkXr5GEaKxmrZLxs7o',
                maxResults: 5,
                q: searchTerm
            };

            $.getJSON(url, params, function (searchTerm) {
                showResults(searchTerm);
            });
        }

        function showResults(results) {
            var html = "";
            var entries = results.items;

            $.each(entries, function (index, value) {
                var title = value.snippet.title;
                var video = value.id.videoId;
                html += '<h4><strong>' + title + '</strong></h4><br>';
                html += '<iframe width="500" height="300" src="https://www.youtube.com/embed/' + video + '" allowfullscreen>';
                console.log(results);
            });

            $('#search-results').html(html);
        }