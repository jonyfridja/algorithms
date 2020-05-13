export default class App extends React.Component {
    state = {
        tests: [
            {
                nums: [1, 3, 5, 0, 0, 1],
                sum: 1,
                resShouldBe: [3, 5]
            }
        ]
    }
    findLongestSubArrayBySum(nums, sum) {
        let res = [-1];
        let currSum = 0;
        let left = 0, right = 0;
        let maxSubArrLen = -1;

        debugger;
        while (right < nums.length) {

            // if should go right
            //      add to sum
            // else 
            //      reduce the left pointer 


            // check should update res
            if (currSum === sum) {
                const newArrSize = right - left + 1;
                if (newArrSize > maxSubArrLen) {
                    maxSubArrLen = newArrSize;
                    res = [left, right]
                }
            }
            if (currSum < sum) {
                currSum += nums[right];
                right++;
            } else {
                currSum -= nums[left];
                left++;
            }
        }

        return res;
    }

    onTestClickHandler = () => {
        const { tests } = this.state;
        tests.forEach(this.runTest)
    }

    runTest = (test, idx) => {
        console.log('STARTING TEST #', idx + 1)

        const { nums, sum, resShouldBe } = test;
        console.log('nums', nums);
        console.log('sum', sum);
        console.log('resShouldBe', resShouldBe);


        const res = this.findLongestSubArrayBySum(nums, sum);

        console.log('res', res);

        const isResEqual = res.every((item, idx) => item === resShouldBe[idx])

        const msg = isResEqual ? 'Nice' : 'Meh';

        console.log(msg)

        console.log('---DONE---')
    }

    render() {
        return (
            <section className="app">
                <button onClick={this.onTestClickHandler}>Run tests!</button>
            </section>
        )
    }
}
