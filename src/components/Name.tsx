import React, { useEffect, useRef } from 'react';

const NameText: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll('path');
    if (paths) {
      paths.forEach((path, index) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
        path.style.animation = `draw 2s ease forwards ${index * 2}s`; 
      });
    }
  }, []);

  return (
<svg width="986" height="126" viewBox="0 0 986 126" fill="none" xmlns="http://www.w3.org/2000/svg" className='name'>
<path d="M967.587 1.79999C971.171 1.79999 973.987 2.69599 976.035 4.48799C978.168 6.19466 979.235 8.58399 979.235 11.656C979.235 14.728 978.168 17.16 976.035 18.952C973.987 20.6587 971.171 21.512 967.587 21.512C964.003 21.512 961.144 20.6587 959.011 18.952C956.963 17.16 955.939 14.728 955.939 11.656C955.939 8.58399 956.963 6.19466 959.011 4.48799C961.144 2.69599 964.003 1.79999 967.587 1.79999ZM977.571 33.416V89.096C977.571 92.68 978.168 95.112 979.363 96.392C980.643 97.672 982.776 98.312 985.763 98.312V101C984.227 100.915 981.838 100.829 978.595 100.744C975.352 100.573 972.067 100.488 968.739 100.488C965.411 100.488 962.04 100.573 958.627 100.744C955.214 100.829 952.654 100.915 950.947 101V98.312C953.934 98.312 956.024 97.672 957.219 96.392C958.499 95.112 959.139 92.68 959.139 89.096V48.776C959.139 44.936 958.542 42.12 957.347 40.328C956.238 38.4507 954.104 37.512 950.947 37.512V34.824C953.678 35.08 956.323 35.208 958.883 35.208C962.467 35.208 965.795 35.08 968.867 34.824C972.024 34.4827 974.926 34.0133 977.571 33.416Z" fill="white"/>
<path d="M919.938 33.032C923.522 33.032 926.423 33.5013 928.642 34.44C930.946 35.2933 932.738 36.488 934.018 38.024C935.383 39.6453 936.365 41.736 936.962 44.296C937.645 46.856 937.986 50.312 937.986 54.664V89.096C937.986 92.68 938.583 95.112 939.778 96.392C941.058 97.672 943.191 98.312 946.178 98.312V101C944.557 100.915 942.125 100.829 938.882 100.744C935.639 100.573 932.439 100.488 929.282 100.488C926.039 100.488 922.839 100.573 919.682 100.744C916.61 100.829 914.263 100.915 912.642 101V98.312C915.202 98.312 916.994 97.672 918.018 96.392C919.042 95.112 919.554 92.68 919.554 89.096V49.288C919.554 47.1546 919.341 45.32 918.914 43.784C918.487 42.1626 917.719 40.9253 916.61 40.072C915.501 39.1333 913.837 38.664 911.618 38.664C909.314 38.664 907.181 39.304 905.218 40.584C903.341 41.864 901.805 43.656 900.61 45.96C899.501 48.1786 898.946 50.696 898.946 53.512V89.096C898.946 92.68 899.458 95.112 900.482 96.392C901.591 97.672 903.383 98.312 905.858 98.312V101C904.322 100.915 902.061 100.829 899.074 100.744C896.173 100.573 893.143 100.488 889.986 100.488C886.743 100.488 883.415 100.573 880.002 100.744C876.589 100.829 874.029 100.915 872.322 101V98.312C875.309 98.312 877.399 97.672 878.594 96.392C879.874 95.112 880.514 92.68 880.514 89.096V48.776C880.514 44.936 879.917 42.12 878.722 40.328C877.613 38.4506 875.479 37.512 872.322 37.512V34.824C875.053 35.08 877.698 35.208 880.258 35.208C883.842 35.208 887.17 35.08 890.242 34.824C893.399 34.4826 896.301 34.0133 898.946 33.416V44.936C901.079 40.584 903.981 37.512 907.65 35.72C911.319 33.928 915.415 33.032 919.938 33.032Z" fill="white"/>
<path d="M823.736 101.896C819.896 101.896 816.696 101.171 814.136 99.72C811.576 98.2693 809.699 96.3493 808.504 93.96C807.309 91.4853 806.712 88.7973 806.712 85.896C806.712 82.2266 807.523 79.24 809.144 76.936C810.851 74.632 813.027 72.7547 815.672 71.304C818.317 69.8533 821.091 68.6587 823.992 67.72C826.979 66.7813 829.795 65.8853 832.44 65.032C835.171 64.0933 837.347 63.0267 838.968 61.832C840.675 60.552 841.528 58.9307 841.528 56.968V46.984C841.528 44.7653 841.144 42.8026 840.376 41.096C839.693 39.304 838.584 37.9386 837.048 37C835.597 36.0613 833.677 35.592 831.288 35.592C829.581 35.592 827.875 35.848 826.168 36.36C824.461 36.7867 823.053 37.5547 821.944 38.664C824.333 39.5173 826.168 40.84 827.448 42.632C828.813 44.3386 829.496 46.3013 829.496 48.52C829.496 51.4213 828.472 53.7253 826.424 55.432C824.461 57.1386 822.115 57.992 819.384 57.992C816.312 57.992 813.965 57.0533 812.344 55.176C810.808 53.2133 810.04 50.8667 810.04 48.136C810.04 45.6613 810.637 43.6133 811.832 41.992C813.112 40.3706 814.861 38.8347 817.08 37.384C819.469 36.0187 822.328 34.952 825.656 34.184C829.069 33.416 832.739 33.032 836.664 33.032C840.589 33.032 844.131 33.4586 847.288 34.312C850.445 35.08 853.091 36.5307 855.224 38.664C857.187 40.6267 858.467 43.0586 859.064 45.96C859.661 48.776 859.96 52.36 859.96 56.712V91.528C859.96 93.6613 860.173 95.1546 860.6 96.008C861.027 96.776 861.752 97.16 862.776 97.16C863.544 97.16 864.269 96.9467 864.952 96.52C865.72 96.0933 866.531 95.5813 867.384 94.984L868.664 97.16C866.872 98.696 864.781 99.8907 862.392 100.744C860.088 101.512 857.485 101.896 854.584 101.896C851.427 101.896 848.909 101.469 847.032 100.616C845.155 99.6773 843.789 98.44 842.936 96.904C842.168 95.368 841.784 93.576 841.784 91.528C839.736 94.7707 837.261 97.3306 834.36 99.208C831.459 101 827.917 101.896 823.736 101.896ZM832.824 93.704C834.531 93.704 836.067 93.32 837.432 92.552C838.883 91.6987 840.248 90.3333 841.528 88.456V62.216C840.76 63.496 839.693 64.648 838.328 65.672C836.963 66.696 835.512 67.7626 833.976 68.872C832.44 69.896 830.947 71.048 829.496 72.328C828.131 73.608 827.021 75.1866 826.168 77.064C825.315 78.9413 824.888 81.2027 824.888 83.848C824.888 87.176 825.613 89.6507 827.064 91.272C828.515 92.8933 830.435 93.704 832.824 93.704Z" fill="white"/>
<path d="M736.661 33.032C740.245 33.032 743.146 33.5013 745.365 34.44C747.584 35.2933 749.376 36.488 750.741 38.024C752.106 39.6453 753.088 41.7786 753.685 44.424C754.282 46.984 754.581 50.3973 754.581 54.664V89.096C754.581 92.68 755.136 95.112 756.245 96.392C757.354 97.672 759.274 98.312 762.005 98.312V101C760.469 100.915 758.122 100.829 754.965 100.744C751.893 100.573 748.864 100.488 745.877 100.488C742.805 100.488 739.776 100.573 736.789 100.744C733.802 100.829 731.541 100.915 730.005 101V98.312C732.309 98.312 733.888 97.672 734.741 96.392C735.68 95.112 736.149 92.68 736.149 89.096V49.288C736.149 47.1546 735.978 45.32 735.637 43.784C735.296 42.1626 734.613 40.9253 733.589 40.072C732.65 39.1333 731.2 38.664 729.237 38.664C727.018 38.664 724.97 39.304 723.093 40.584C721.216 41.864 719.68 43.656 718.485 45.96C717.376 48.1786 716.821 50.696 716.821 53.512V89.096C716.821 92.68 717.29 95.112 718.229 96.392C719.168 97.672 720.746 98.312 722.965 98.312V101C721.6 100.915 719.466 100.829 716.565 100.744C713.749 100.573 710.848 100.488 707.861 100.488C704.618 100.488 701.29 100.573 697.877 100.744C694.464 100.829 691.904 100.915 690.197 101V98.312C693.184 98.312 695.274 97.672 696.469 96.392C697.749 95.112 698.389 92.68 698.389 89.096V48.776C698.389 44.936 697.792 42.12 696.597 40.328C695.488 38.4506 693.354 37.512 690.197 37.512V34.824C692.928 35.08 695.573 35.208 698.133 35.208C701.717 35.208 705.045 35.08 708.117 34.824C711.274 34.4826 714.176 34.0133 716.821 33.416V44.936C718.869 40.6693 721.642 37.64 725.141 35.848C728.64 33.9706 732.48 33.032 736.661 33.032ZM775.189 33.032C778.773 33.032 781.674 33.5013 783.893 34.44C786.112 35.2933 787.904 36.488 789.269 38.024C790.634 39.6453 791.616 41.7786 792.213 44.424C792.81 46.984 793.109 50.3973 793.109 54.664V89.096C793.109 92.68 793.706 95.112 794.901 96.392C796.181 97.672 798.314 98.312 801.301 98.312V101C799.68 100.915 797.248 100.829 794.005 100.744C790.762 100.573 787.562 100.488 784.405 100.488C781.333 100.488 778.304 100.573 775.317 100.744C772.33 100.829 770.069 100.915 768.533 101V98.312C770.837 98.312 772.416 97.672 773.269 96.392C774.208 95.112 774.677 92.68 774.677 89.096V49.288C774.677 47.1546 774.464 45.32 774.037 43.784C773.696 42.1626 772.97 40.9253 771.861 40.072C770.837 39.1333 769.216 38.664 766.997 38.664C764.778 38.664 762.73 39.3466 760.853 40.712C758.976 42.0773 757.44 43.912 756.245 46.216C755.136 48.52 754.538 51.08 754.453 53.896L753.813 46.088C756.117 40.968 759.146 37.512 762.901 35.72C766.741 33.928 770.837 33.032 775.189 33.032Z" fill="white"/>
<path d="M641.611 101.896C637.771 101.896 634.571 101.171 632.011 99.72C629.451 98.2693 627.574 96.3493 626.379 93.96C625.184 91.4853 624.587 88.7973 624.587 85.896C624.587 82.2266 625.398 79.24 627.019 76.936C628.726 74.632 630.902 72.7547 633.547 71.304C636.192 69.8533 638.966 68.6587 641.867 67.72C644.854 66.7813 647.67 65.8853 650.315 65.032C653.046 64.0933 655.222 63.0267 656.843 61.832C658.55 60.552 659.403 58.9307 659.403 56.968V46.984C659.403 44.7653 659.019 42.8026 658.251 41.096C657.568 39.304 656.459 37.9386 654.923 37C653.472 36.0613 651.552 35.592 649.163 35.592C647.456 35.592 645.75 35.848 644.043 36.36C642.336 36.7867 640.928 37.5547 639.819 38.664C642.208 39.5173 644.043 40.84 645.323 42.632C646.688 44.3386 647.371 46.3013 647.371 48.52C647.371 51.4213 646.347 53.7253 644.299 55.432C642.336 57.1386 639.99 57.992 637.259 57.992C634.187 57.992 631.84 57.0533 630.219 55.176C628.683 53.2133 627.915 50.8667 627.915 48.136C627.915 45.6613 628.512 43.6133 629.707 41.992C630.987 40.3706 632.736 38.8347 634.955 37.384C637.344 36.0187 640.203 34.952 643.531 34.184C646.944 33.416 650.614 33.032 654.539 33.032C658.464 33.032 662.006 33.4586 665.163 34.312C668.32 35.08 670.966 36.5307 673.099 38.664C675.062 40.6267 676.342 43.0586 676.939 45.96C677.536 48.776 677.835 52.36 677.835 56.712V91.528C677.835 93.6613 678.048 95.1546 678.475 96.008C678.902 96.776 679.627 97.16 680.651 97.16C681.419 97.16 682.144 96.9467 682.827 96.52C683.595 96.0933 684.406 95.5813 685.259 94.984L686.539 97.16C684.747 98.696 682.656 99.8907 680.267 100.744C677.963 101.512 675.36 101.896 672.459 101.896C669.302 101.896 666.784 101.469 664.907 100.616C663.03 99.6773 661.664 98.44 660.811 96.904C660.043 95.368 659.659 93.576 659.659 91.528C657.611 94.7707 655.136 97.3306 652.235 99.208C649.334 101 645.792 101.896 641.611 101.896ZM650.699 93.704C652.406 93.704 653.942 93.32 655.307 92.552C656.758 91.6987 658.123 90.3333 659.403 88.456V62.216C658.635 63.496 657.568 64.648 656.203 65.672C654.838 66.696 653.387 67.7626 651.851 68.872C650.315 69.896 648.822 71.048 647.371 72.328C646.006 73.608 644.896 75.1866 644.043 77.064C643.19 78.9413 642.763 81.2027 642.763 83.848C642.763 87.176 643.488 89.6507 644.939 91.272C646.39 92.8933 648.31 93.704 650.699 93.704Z" fill="white"/>
<path d="M592.938 33.032C596.522 33.032 599.423 33.5013 601.642 34.44C603.946 35.2933 605.738 36.488 607.018 38.024C608.383 39.6453 609.365 41.736 609.962 44.296C610.645 46.856 610.986 50.312 610.986 54.664V89.096C610.986 92.68 611.583 95.112 612.778 96.392C614.058 97.672 616.191 98.312 619.178 98.312V101C617.557 100.915 615.125 100.829 611.882 100.744C608.639 100.573 605.439 100.488 602.282 100.488C599.039 100.488 595.839 100.573 592.682 100.744C589.61 100.829 587.263 100.915 585.642 101V98.312C588.202 98.312 589.994 97.672 591.018 96.392C592.042 95.112 592.554 92.68 592.554 89.096V49.288C592.554 47.1546 592.341 45.32 591.914 43.784C591.487 42.1626 590.719 40.9253 589.61 40.072C588.501 39.1333 586.837 38.664 584.618 38.664C582.314 38.664 580.181 39.304 578.218 40.584C576.341 41.864 574.805 43.656 573.61 45.96C572.501 48.1786 571.946 50.696 571.946 53.512V89.096C571.946 92.68 572.458 95.112 573.482 96.392C574.591 97.672 576.383 98.312 578.858 98.312V101C577.322 100.915 575.061 100.829 572.074 100.744C569.173 100.573 566.143 100.488 562.986 100.488C559.743 100.488 556.415 100.573 553.002 100.744C549.589 100.829 547.029 100.915 545.322 101V98.312C548.309 98.312 550.399 97.672 551.594 96.392C552.874 95.112 553.514 92.68 553.514 89.096V48.776C553.514 44.936 552.917 42.12 551.722 40.328C550.613 38.4506 548.479 37.512 545.322 37.512V34.824C548.053 35.08 550.698 35.208 553.258 35.208C556.842 35.208 560.17 35.08 563.242 34.824C566.399 34.4826 569.301 34.0133 571.946 33.416V44.936C574.079 40.584 576.981 37.512 580.65 35.72C584.319 33.928 588.415 33.032 592.938 33.032Z" fill="white"/>
<path d="M540.454 10.376V12.936C537.723 13.2773 535.675 14.0026 534.31 15.112C532.945 16.136 532.006 17.8 531.494 20.104C531.067 22.408 530.854 25.6506 530.854 29.832V101.256C529.83 101.171 528.763 101.128 527.654 101.128C526.63 101.128 525.521 101.171 524.326 101.256L468.774 30.856V80.008C468.774 84.7013 469.03 88.328 469.542 90.888C470.054 93.3626 471.163 95.1547 472.87 96.264C474.662 97.288 477.435 98.0133 481.19 98.44V101C479.569 100.829 477.435 100.744 474.79 100.744C472.145 100.659 469.67 100.616 467.366 100.616C465.403 100.616 463.398 100.659 461.35 100.744C459.302 100.744 457.595 100.829 456.23 101V98.44C458.961 98.0133 461.009 97.288 462.374 96.264C463.739 95.24 464.635 93.576 465.062 91.272C465.574 88.8826 465.83 85.64 465.83 81.544V23.944C465.83 20.7866 465.574 18.4826 465.062 17.032C464.635 15.496 463.697 14.472 462.246 13.96C460.881 13.3626 458.875 13.0213 456.23 12.936V10.376C457.595 10.4613 459.302 10.5466 461.35 10.632C463.398 10.7173 465.403 10.76 467.366 10.76C469.414 10.76 471.377 10.7173 473.254 10.632C475.131 10.5466 476.838 10.4613 478.374 10.376L527.91 71.432V31.368C527.91 26.6746 527.654 23.0906 527.142 20.616C526.63 18.056 525.478 16.2213 523.686 15.112C521.979 14.0026 519.249 13.2773 515.494 12.936V10.376C517.115 10.4613 519.249 10.5466 521.894 10.632C524.539 10.7173 527.014 10.76 529.318 10.76C531.366 10.76 533.371 10.7173 535.334 10.632C537.382 10.5466 539.089 10.4613 540.454 10.376Z" fill="white"/>
<path d="M424.789 34.824V37.384C423.168 37.8106 421.632 38.8346 420.181 40.456C418.73 41.992 417.322 44.6373 415.957 48.392L397.909 99.08L393.173 108.04L365.269 44.68C363.818 41.352 362.368 39.3466 360.917 38.664C359.552 37.896 358.357 37.512 357.333 37.512V34.824C360.149 35.08 363.05 35.2933 366.037 35.464C369.109 35.5493 372.053 35.592 374.869 35.592C378.368 35.592 381.568 35.5066 384.469 35.336C387.37 35.1653 390.101 34.9946 392.661 34.824V37.512C390.954 37.512 389.333 37.64 387.797 37.896C386.346 38.0666 385.322 38.664 384.725 39.688C384.213 40.6266 384.469 42.2906 385.493 44.68L401.621 83.592L400.469 84.36L409.941 57.864C411.562 53.256 412.245 49.5013 411.989 46.6C411.733 43.6133 410.794 41.3946 409.173 39.944C407.552 38.408 405.333 37.5546 402.517 37.384V34.824C403.882 34.9093 405.29 34.9946 406.741 35.08C408.192 35.08 409.642 35.1226 411.093 35.208C412.544 35.208 413.824 35.208 414.933 35.208C416.64 35.208 418.432 35.1653 420.309 35.08C422.186 34.9946 423.68 34.9093 424.789 34.824ZM397.909 99.08L393.045 112.776C392.192 114.909 391.296 116.701 390.357 118.152C389.504 119.688 388.522 120.925 387.413 121.864C386.218 122.888 384.682 123.656 382.805 124.168C380.928 124.765 378.752 125.064 376.277 125.064C374.229 125.064 372.096 124.723 369.877 124.04C367.744 123.357 365.952 122.248 364.501 120.712C363.05 119.176 362.325 117.213 362.325 114.824C362.325 112.179 363.264 110.045 365.141 108.424C367.018 106.888 369.493 106.12 372.565 106.12C375.381 106.12 377.685 106.803 379.477 108.168C381.269 109.533 382.165 111.539 382.165 114.184C382.165 115.891 381.61 117.512 380.501 119.048C379.477 120.584 377.898 121.736 375.765 122.504C376.192 122.589 376.704 122.632 377.301 122.632C377.898 122.632 378.368 122.632 378.709 122.632C381.269 122.632 383.53 121.821 385.493 120.2C387.456 118.579 389.077 116.019 390.357 112.52L394.837 99.336L397.909 99.08Z" fill="white"/>
<path d="M332.221 33.032C339.73 33.032 345.618 35.2506 349.885 39.688C354.152 44.1253 356.285 51.3786 356.285 61.448H314.173L313.917 59.016H340.157C340.242 54.8347 339.986 50.9947 339.389 47.496C338.792 43.912 337.853 41.0533 336.573 38.92C335.293 36.7866 333.586 35.72 331.453 35.72C328.466 35.72 325.906 37.5973 323.773 41.352C321.725 45.1066 320.488 51.336 320.061 60.04L320.445 60.808C320.36 61.832 320.274 62.8986 320.189 64.008C320.189 65.1173 320.189 66.2693 320.189 67.464C320.189 73.352 321 78.1307 322.621 81.8C324.328 85.4693 326.461 88.1573 329.021 89.864C331.581 91.4853 334.184 92.296 336.829 92.296C338.621 92.296 340.456 92.04 342.333 91.528C344.296 90.9307 346.258 89.9067 348.221 88.456C350.184 86.92 352.018 84.7867 353.725 82.056L356.029 82.824C355.005 86.0666 353.384 89.224 351.165 92.296C348.946 95.368 346.13 97.8853 342.717 99.848C339.304 101.811 335.208 102.792 330.429 102.792C324.626 102.792 319.506 101.555 315.069 99.08C310.632 96.6053 307.133 92.8507 304.573 87.816C302.098 82.7813 300.861 76.3813 300.861 68.616C300.861 60.68 302.184 54.0667 304.829 48.776C307.56 43.4853 311.272 39.56 315.965 37C320.744 34.3546 326.162 33.032 332.221 33.032Z" fill="white"/>
<path d="M286.809 0.776001V89.096C286.809 92.68 287.406 95.112 288.601 96.392C289.881 97.672 292.014 98.312 295.001 98.312V101C293.38 100.915 290.948 100.829 287.705 100.744C284.462 100.573 281.177 100.488 277.849 100.488C274.521 100.488 271.15 100.573 267.737 100.744C264.409 100.829 261.892 100.915 260.185 101V98.312C263.172 98.312 265.262 97.672 266.457 96.392C267.737 95.112 268.377 92.68 268.377 89.096V16.136C268.377 12.296 267.78 9.48001 266.585 7.688C265.476 5.81067 263.342 4.872 260.185 4.872V2.18401C262.916 2.44 265.561 2.568 268.121 2.568C271.62 2.568 274.948 2.44 278.105 2.18401C281.262 1.84267 284.164 1.37334 286.809 0.776001Z" fill="white"/>
<path d="M229.688 33.032C233.272 33.032 236.173 33.5013 238.392 34.44C240.696 35.2933 242.488 36.488 243.768 38.024C245.133 39.6453 246.115 41.736 246.712 44.296C247.395 46.856 247.736 50.312 247.736 54.664V89.096C247.736 92.68 248.333 95.112 249.528 96.392C250.808 97.672 252.941 98.312 255.928 98.312V101C254.307 100.915 251.875 100.829 248.632 100.744C245.389 100.573 242.189 100.488 239.032 100.488C235.789 100.488 232.589 100.573 229.432 100.744C226.36 100.829 224.013 100.915 222.392 101V98.312C224.952 98.312 226.744 97.672 227.768 96.392C228.792 95.112 229.304 92.68 229.304 89.096V49.288C229.304 47.1546 229.091 45.32 228.664 43.784C228.237 42.1626 227.469 40.9253 226.36 40.072C225.251 39.1333 223.587 38.664 221.368 38.664C219.064 38.664 216.931 39.304 214.968 40.584C213.091 41.864 211.555 43.656 210.36 45.96C209.251 48.1786 208.696 50.696 208.696 53.512V89.096C208.696 92.68 209.208 95.112 210.232 96.392C211.341 97.672 213.133 98.312 215.608 98.312V101C214.072 100.915 211.811 100.829 208.824 100.744C205.923 100.573 202.893 100.488 199.736 100.488C196.493 100.488 193.165 100.573 189.752 100.744C186.339 100.829 183.779 100.915 182.072 101V98.312C185.059 98.312 187.149 97.672 188.344 96.392C189.624 95.112 190.264 92.68 190.264 89.096V48.776C190.264 44.936 189.667 42.12 188.472 40.328C187.363 38.4506 185.229 37.512 182.072 37.512V34.824C184.803 35.08 187.448 35.208 190.008 35.208C193.592 35.208 196.92 35.08 199.992 34.824C203.149 34.4826 206.051 34.0133 208.696 33.416V44.936C210.829 40.584 213.731 37.512 217.4 35.72C221.069 33.928 225.165 33.032 229.688 33.032Z" fill="white"/>
<path d="M133.486 101.896C129.646 101.896 126.446 101.171 123.886 99.72C121.326 98.2693 119.449 96.3493 118.254 93.96C117.059 91.4853 116.462 88.7973 116.462 85.896C116.462 82.2266 117.273 79.24 118.894 76.936C120.601 74.632 122.777 72.7547 125.422 71.304C128.067 69.8533 130.841 68.6587 133.742 67.72C136.729 66.7813 139.545 65.8853 142.19 65.032C144.921 64.0933 147.097 63.0267 148.718 61.832C150.425 60.552 151.278 58.9307 151.278 56.968V46.984C151.278 44.7653 150.894 42.8026 150.126 41.096C149.443 39.304 148.334 37.9386 146.798 37C145.347 36.0613 143.427 35.592 141.038 35.592C139.331 35.592 137.625 35.848 135.918 36.36C134.211 36.7867 132.803 37.5547 131.694 38.664C134.083 39.5173 135.918 40.84 137.198 42.632C138.563 44.3386 139.246 46.3013 139.246 48.52C139.246 51.4213 138.222 53.7253 136.174 55.432C134.211 57.1386 131.865 57.992 129.134 57.992C126.062 57.992 123.715 57.0533 122.094 55.176C120.558 53.2133 119.79 50.8667 119.79 48.136C119.79 45.6613 120.387 43.6133 121.582 41.992C122.862 40.3706 124.611 38.8347 126.83 37.384C129.219 36.0187 132.078 34.952 135.406 34.184C138.819 33.416 142.489 33.032 146.414 33.032C150.339 33.032 153.881 33.4586 157.038 34.312C160.195 35.08 162.841 36.5307 164.974 38.664C166.937 40.6267 168.217 43.0586 168.814 45.96C169.411 48.776 169.71 52.36 169.71 56.712V91.528C169.71 93.6613 169.923 95.1546 170.35 96.008C170.777 96.776 171.502 97.16 172.526 97.16C173.294 97.16 174.019 96.9467 174.702 96.52C175.47 96.0933 176.281 95.5813 177.134 94.984L178.414 97.16C176.622 98.696 174.531 99.8907 172.142 100.744C169.838 101.512 167.235 101.896 164.334 101.896C161.177 101.896 158.659 101.469 156.782 100.616C154.905 99.6773 153.539 98.44 152.686 96.904C151.918 95.368 151.534 93.576 151.534 91.528C149.486 94.7707 147.011 97.3306 144.11 99.208C141.209 101 137.667 101.896 133.486 101.896ZM142.574 93.704C144.281 93.704 145.817 93.32 147.182 92.552C148.633 91.6987 149.998 90.3333 151.278 88.456V62.216C150.51 63.496 149.443 64.648 148.078 65.672C146.713 66.696 145.262 67.7626 143.726 68.872C142.19 69.896 140.697 71.048 139.246 72.328C137.881 73.608 136.771 75.1866 135.918 77.064C135.065 78.9413 134.638 81.2027 134.638 83.848C134.638 87.176 135.363 89.6507 136.814 91.272C138.265 92.8933 140.185 93.704 142.574 93.704Z" fill="white"/>
<path d="M96.806 13.832V34.824H111.91V37.384H96.806V89.096C96.806 91.656 97.2753 93.4906 98.214 94.6C99.1527 95.624 100.561 96.136 102.438 96.136C103.974 96.136 105.51 95.5813 107.046 94.472C108.582 93.2773 109.947 91.272 111.142 88.456L113.318 89.608C111.953 93.448 109.862 96.6053 107.046 99.08C104.315 101.555 100.561 102.792 95.782 102.792C92.966 102.792 90.4913 102.408 88.358 101.64C86.2247 100.957 84.4327 99.8906 82.982 98.44C81.1047 96.5626 79.8673 94.2586 79.27 91.528C78.6727 88.712 78.374 85.0853 78.374 80.648V37.384H67.622V34.824H78.374V17.928C81.958 17.928 85.2433 17.6293 88.23 17.032C91.302 16.3493 94.1607 15.2826 96.806 13.832Z" fill="white"/>
<path d="M29.352 8.71201C34.3866 8.71201 38.2693 9.26667 41 10.376C43.7306 11.4 46.0773 12.5093 48.04 13.704C49.064 14.3013 49.8746 14.7707 50.472 15.112C51.1546 15.368 51.7946 15.496 52.392 15.496C53.2453 15.496 53.8426 15.0267 54.184 14.088C54.6106 13.1493 54.952 11.7413 55.208 9.86401H58.152C58.0666 11.4853 57.9386 13.448 57.768 15.752C57.6826 17.9707 57.5973 20.9147 57.512 24.584C57.512 28.2533 57.512 33.0747 57.512 39.048H54.568C54.2266 34.6107 53.2026 30.3013 51.496 26.12C49.7893 21.9387 47.3573 18.5253 44.2 15.88C41.128 13.1493 37.3306 11.784 32.808 11.784C28.712 11.784 25.3413 12.936 22.696 15.24C20.0506 17.544 18.728 20.744 18.728 24.84C18.728 28.2533 19.5813 31.1973 21.288 33.672C22.9946 36.0613 25.4693 38.408 28.712 40.712C32.04 43.016 36.0506 45.7893 40.744 49.032C44.84 51.6773 48.5093 54.3227 51.752 56.968C54.9946 59.6133 57.5973 62.6 59.56 65.928C61.5226 69.256 62.504 73.224 62.504 77.832C62.504 83.464 61.0106 88.1147 58.024 91.784C55.1226 95.4533 51.2826 98.2267 46.504 100.104C41.7253 101.896 36.4773 102.792 30.76 102.792C25.4693 102.792 21.2453 102.28 18.088 101.256C14.9306 100.232 12.2853 99.1653 10.152 98.056C8.27464 96.8613 6.82398 96.264 5.79998 96.264C4.94664 96.264 4.30664 96.7333 3.87998 97.672C3.53864 98.6107 3.23998 100.019 2.98398 101.896H0.039978C0.210645 99.848 0.295978 97.4587 0.295978 94.728C0.381311 91.9973 0.423978 88.456 0.423978 84.104C0.509311 79.6667 0.551978 74.0773 0.551978 67.336H3.49598C3.83731 72.968 4.77598 78.2587 6.31198 83.208C7.93331 88.072 10.3653 91.9973 13.608 94.984C16.936 97.9707 21.3306 99.464 26.792 99.464C29.7786 99.464 32.424 98.952 34.728 97.928C37.1173 96.8187 39.0373 95.1973 40.488 93.064C41.9386 90.9307 42.664 88.2853 42.664 85.128C42.664 81.544 41.8106 78.4293 40.104 75.784C38.4826 73.1387 36.2213 70.664 33.32 68.36C30.504 66.056 27.2186 63.7093 23.464 61.32C19.4533 58.6747 15.6986 56.0293 12.2 53.384C8.70131 50.7387 5.88531 47.7093 3.75198 44.296C1.70398 40.8827 0.679978 36.8293 0.679978 32.136C0.679978 26.76 2.00264 22.3653 4.64798 18.952C7.37864 15.4533 10.92 12.8933 15.272 11.272C19.7093 9.56534 24.4026 8.71201 29.352 8.71201Z" fill="white"/>
</svg>

  );
};

export default NameText;

