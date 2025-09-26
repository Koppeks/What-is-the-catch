import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerUpdateWithoutMergedIntoInputSchema } from './TriggerUpdateWithoutMergedIntoInputSchema';
import { TriggerUncheckedUpdateWithoutMergedIntoInputSchema } from './TriggerUncheckedUpdateWithoutMergedIntoInputSchema';
import { TriggerCreateWithoutMergedIntoInputSchema } from './TriggerCreateWithoutMergedIntoInputSchema';
import { TriggerUncheckedCreateWithoutMergedIntoInputSchema } from './TriggerUncheckedCreateWithoutMergedIntoInputSchema';

export const TriggerUpsertWithWhereUniqueWithoutMergedIntoInputSchema: z.ZodType<Prisma.TriggerUpsertWithWhereUniqueWithoutMergedIntoInput> = z.object({
  where: z.lazy(() => TriggerWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TriggerUpdateWithoutMergedIntoInputSchema),z.lazy(() => TriggerUncheckedUpdateWithoutMergedIntoInputSchema) ]),
  create: z.union([ z.lazy(() => TriggerCreateWithoutMergedIntoInputSchema),z.lazy(() => TriggerUncheckedCreateWithoutMergedIntoInputSchema) ]),
}).strict() as z.ZodType<Prisma.TriggerUpsertWithWhereUniqueWithoutMergedIntoInput>;

export default TriggerUpsertWithWhereUniqueWithoutMergedIntoInputSchema;
