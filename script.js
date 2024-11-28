        const input = document.querySelector('#input');
        const button = document.querySelector('#search');
        const result = document.querySelector('#result');

        const GetAnswer = async () => {
            const question = input.value;

            if (!question) {
                alert('Please enter your question');
                return;
            }

            button.disabled = true;
            button.textContent = 'Loading...';
            button.classList.toggle('show');

            const url = 'https://free-chatgpt-api.p.rapidapi.com/chat-completion-one?prompt=' + encodeURIComponent(question);
            const options = {
              method: 'GET',
              headers: {
                'x-rapidapi-key': '57acba4e98mshf370cb090e21782p18a4eajsn3071482c3864',
                'x-rapidapi-host': 'free-chatgpt-api.p.rapidapi.com'
              }
            };


            const response = await fetch(url, options);
            const data = await response.json()

            result.textContent = data.response;

        };

        button.addEventListener('click', GetAnswer);