import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HitterCreateWithoutTriggerInputSchema } from './HitterCreateWithoutTriggerInputSchema';
import { HitterUncheckedCreateWithoutTriggerInputSchema } from './HitterUncheckedCreateWithoutTriggerInputSchema';
import { HitterCreateOrConnectWithoutTriggerInputSchema } from './HitterCreateOrConnectWithoutTriggerInputSchema';
import { HitterUpsertWithoutTriggerInputSchema } from './HitterUpsertWithoutTriggerInputSchema';
import { HitterWhereUniqueInputSchema } from './HitterWhereUniqueInputSchema';
import { HitterUpdateToOneWithWhereWithoutTriggerInputSchema } from './HitterUpdateToOneWithWhereWithoutTriggerInputSchema';
import { HitterUpdateWithoutTriggerInputSchema } from './HitterUpdateWithoutTriggerInputSchema';
import { HitterUncheckedUpdateWithoutTriggerInputSchema } from './HitterUncheckedUpdateWithoutTriggerInputSchema';

export const HitterUpdateOneRequiredWithoutTriggerNestedInputSchema: z.ZodType<Prisma.HitterUpdateOneRequiredWithoutTriggerNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => HitterCreateWithoutTriggerInputSchema), z.lazy(() => HitterUncheckedCreateWithoutTriggerInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HitterCreateOrConnectWithoutTriggerInputSchema).optional(),
  upsert: z.lazy(() => HitterUpsertWithoutTriggerInputSchema).optional(),
  connect: z.lazy(() => HitterWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => HitterUpdateToOneWithWhereWithoutTriggerInputSchema), z.lazy(() => HitterUpdateWithoutTriggerInputSchema), z.lazy(() => HitterUncheckedUpdateWithoutTriggerInputSchema) ]).optional(),
});

export default HitterUpdateOneRequiredWithoutTriggerNestedInputSchema;
