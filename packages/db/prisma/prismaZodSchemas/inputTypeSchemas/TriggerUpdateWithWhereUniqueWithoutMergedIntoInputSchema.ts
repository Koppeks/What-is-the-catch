import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerUpdateWithoutMergedIntoInputSchema } from './TriggerUpdateWithoutMergedIntoInputSchema';
import { TriggerUncheckedUpdateWithoutMergedIntoInputSchema } from './TriggerUncheckedUpdateWithoutMergedIntoInputSchema';

export const TriggerUpdateWithWhereUniqueWithoutMergedIntoInputSchema: z.ZodType<Prisma.TriggerUpdateWithWhereUniqueWithoutMergedIntoInput> = z.object({
  where: z.lazy(() => TriggerWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TriggerUpdateWithoutMergedIntoInputSchema),z.lazy(() => TriggerUncheckedUpdateWithoutMergedIntoInputSchema) ]),
}).strict() as z.ZodType<Prisma.TriggerUpdateWithWhereUniqueWithoutMergedIntoInput>;

export default TriggerUpdateWithWhereUniqueWithoutMergedIntoInputSchema;
