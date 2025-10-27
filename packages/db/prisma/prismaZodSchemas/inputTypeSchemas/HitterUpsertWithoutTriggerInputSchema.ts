import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HitterUpdateWithoutTriggerInputSchema } from './HitterUpdateWithoutTriggerInputSchema';
import { HitterUncheckedUpdateWithoutTriggerInputSchema } from './HitterUncheckedUpdateWithoutTriggerInputSchema';
import { HitterCreateWithoutTriggerInputSchema } from './HitterCreateWithoutTriggerInputSchema';
import { HitterUncheckedCreateWithoutTriggerInputSchema } from './HitterUncheckedCreateWithoutTriggerInputSchema';
import { HitterWhereInputSchema } from './HitterWhereInputSchema';

export const HitterUpsertWithoutTriggerInputSchema: z.ZodType<Prisma.HitterUpsertWithoutTriggerInput> = z.strictObject({
  update: z.union([ z.lazy(() => HitterUpdateWithoutTriggerInputSchema), z.lazy(() => HitterUncheckedUpdateWithoutTriggerInputSchema) ]),
  create: z.union([ z.lazy(() => HitterCreateWithoutTriggerInputSchema), z.lazy(() => HitterUncheckedCreateWithoutTriggerInputSchema) ]),
  where: z.lazy(() => HitterWhereInputSchema).optional(),
});

export default HitterUpsertWithoutTriggerInputSchema;
