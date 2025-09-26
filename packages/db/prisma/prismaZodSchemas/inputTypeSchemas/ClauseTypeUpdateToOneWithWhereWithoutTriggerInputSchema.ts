import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseTypeWhereInputSchema } from './ClauseTypeWhereInputSchema';
import { ClauseTypeUpdateWithoutTriggerInputSchema } from './ClauseTypeUpdateWithoutTriggerInputSchema';
import { ClauseTypeUncheckedUpdateWithoutTriggerInputSchema } from './ClauseTypeUncheckedUpdateWithoutTriggerInputSchema';

export const ClauseTypeUpdateToOneWithWhereWithoutTriggerInputSchema: z.ZodType<Prisma.ClauseTypeUpdateToOneWithWhereWithoutTriggerInput> = z.object({
  where: z.lazy(() => ClauseTypeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ClauseTypeUpdateWithoutTriggerInputSchema),z.lazy(() => ClauseTypeUncheckedUpdateWithoutTriggerInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseTypeUpdateToOneWithWhereWithoutTriggerInput>;

export default ClauseTypeUpdateToOneWithWhereWithoutTriggerInputSchema;
