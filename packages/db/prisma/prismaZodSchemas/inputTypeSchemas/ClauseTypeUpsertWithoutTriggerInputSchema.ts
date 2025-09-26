import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseTypeUpdateWithoutTriggerInputSchema } from './ClauseTypeUpdateWithoutTriggerInputSchema';
import { ClauseTypeUncheckedUpdateWithoutTriggerInputSchema } from './ClauseTypeUncheckedUpdateWithoutTriggerInputSchema';
import { ClauseTypeCreateWithoutTriggerInputSchema } from './ClauseTypeCreateWithoutTriggerInputSchema';
import { ClauseTypeUncheckedCreateWithoutTriggerInputSchema } from './ClauseTypeUncheckedCreateWithoutTriggerInputSchema';
import { ClauseTypeWhereInputSchema } from './ClauseTypeWhereInputSchema';

export const ClauseTypeUpsertWithoutTriggerInputSchema: z.ZodType<Prisma.ClauseTypeUpsertWithoutTriggerInput> = z.object({
  update: z.union([ z.lazy(() => ClauseTypeUpdateWithoutTriggerInputSchema),z.lazy(() => ClauseTypeUncheckedUpdateWithoutTriggerInputSchema) ]),
  create: z.union([ z.lazy(() => ClauseTypeCreateWithoutTriggerInputSchema),z.lazy(() => ClauseTypeUncheckedCreateWithoutTriggerInputSchema) ]),
  where: z.lazy(() => ClauseTypeWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseTypeUpsertWithoutTriggerInput>;

export default ClauseTypeUpsertWithoutTriggerInputSchema;
