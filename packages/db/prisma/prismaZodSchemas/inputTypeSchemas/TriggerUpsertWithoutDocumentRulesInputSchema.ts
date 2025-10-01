import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerUpdateWithoutDocumentRulesInputSchema } from './TriggerUpdateWithoutDocumentRulesInputSchema';
import { TriggerUncheckedUpdateWithoutDocumentRulesInputSchema } from './TriggerUncheckedUpdateWithoutDocumentRulesInputSchema';
import { TriggerCreateWithoutDocumentRulesInputSchema } from './TriggerCreateWithoutDocumentRulesInputSchema';
import { TriggerUncheckedCreateWithoutDocumentRulesInputSchema } from './TriggerUncheckedCreateWithoutDocumentRulesInputSchema';
import { TriggerWhereInputSchema } from './TriggerWhereInputSchema';

export const TriggerUpsertWithoutDocumentRulesInputSchema: z.ZodType<Prisma.TriggerUpsertWithoutDocumentRulesInput> = z.object({
  update: z.union([ z.lazy(() => TriggerUpdateWithoutDocumentRulesInputSchema),z.lazy(() => TriggerUncheckedUpdateWithoutDocumentRulesInputSchema) ]),
  create: z.union([ z.lazy(() => TriggerCreateWithoutDocumentRulesInputSchema),z.lazy(() => TriggerUncheckedCreateWithoutDocumentRulesInputSchema) ]),
  where: z.lazy(() => TriggerWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.TriggerUpsertWithoutDocumentRulesInput>;

export default TriggerUpsertWithoutDocumentRulesInputSchema;
