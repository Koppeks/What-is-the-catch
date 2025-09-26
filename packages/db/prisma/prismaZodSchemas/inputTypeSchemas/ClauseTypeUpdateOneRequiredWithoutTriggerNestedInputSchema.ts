import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseTypeCreateWithoutTriggerInputSchema } from './ClauseTypeCreateWithoutTriggerInputSchema';
import { ClauseTypeUncheckedCreateWithoutTriggerInputSchema } from './ClauseTypeUncheckedCreateWithoutTriggerInputSchema';
import { ClauseTypeCreateOrConnectWithoutTriggerInputSchema } from './ClauseTypeCreateOrConnectWithoutTriggerInputSchema';
import { ClauseTypeUpsertWithoutTriggerInputSchema } from './ClauseTypeUpsertWithoutTriggerInputSchema';
import { ClauseTypeWhereUniqueInputSchema } from './ClauseTypeWhereUniqueInputSchema';
import { ClauseTypeUpdateToOneWithWhereWithoutTriggerInputSchema } from './ClauseTypeUpdateToOneWithWhereWithoutTriggerInputSchema';
import { ClauseTypeUpdateWithoutTriggerInputSchema } from './ClauseTypeUpdateWithoutTriggerInputSchema';
import { ClauseTypeUncheckedUpdateWithoutTriggerInputSchema } from './ClauseTypeUncheckedUpdateWithoutTriggerInputSchema';

export const ClauseTypeUpdateOneRequiredWithoutTriggerNestedInputSchema: z.ZodType<Prisma.ClauseTypeUpdateOneRequiredWithoutTriggerNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClauseTypeCreateWithoutTriggerInputSchema),z.lazy(() => ClauseTypeUncheckedCreateWithoutTriggerInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClauseTypeCreateOrConnectWithoutTriggerInputSchema).optional(),
  upsert: z.lazy(() => ClauseTypeUpsertWithoutTriggerInputSchema).optional(),
  connect: z.lazy(() => ClauseTypeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ClauseTypeUpdateToOneWithWhereWithoutTriggerInputSchema),z.lazy(() => ClauseTypeUpdateWithoutTriggerInputSchema),z.lazy(() => ClauseTypeUncheckedUpdateWithoutTriggerInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.ClauseTypeUpdateOneRequiredWithoutTriggerNestedInput>;

export default ClauseTypeUpdateOneRequiredWithoutTriggerNestedInputSchema;
