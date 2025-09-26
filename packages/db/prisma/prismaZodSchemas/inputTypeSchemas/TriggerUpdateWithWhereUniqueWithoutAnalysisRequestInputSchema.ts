import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerUpdateWithoutAnalysisRequestInputSchema } from './TriggerUpdateWithoutAnalysisRequestInputSchema';
import { TriggerUncheckedUpdateWithoutAnalysisRequestInputSchema } from './TriggerUncheckedUpdateWithoutAnalysisRequestInputSchema';

export const TriggerUpdateWithWhereUniqueWithoutAnalysisRequestInputSchema: z.ZodType<Prisma.TriggerUpdateWithWhereUniqueWithoutAnalysisRequestInput> = z.object({
  where: z.lazy(() => TriggerWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TriggerUpdateWithoutAnalysisRequestInputSchema),z.lazy(() => TriggerUncheckedUpdateWithoutAnalysisRequestInputSchema) ]),
}).strict() as z.ZodType<Prisma.TriggerUpdateWithWhereUniqueWithoutAnalysisRequestInput>;

export default TriggerUpdateWithWhereUniqueWithoutAnalysisRequestInputSchema;
