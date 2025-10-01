import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerWhereInputSchema } from './TriggerWhereInputSchema';
import { TriggerUpdateWithoutDocumentRulesInputSchema } from './TriggerUpdateWithoutDocumentRulesInputSchema';
import { TriggerUncheckedUpdateWithoutDocumentRulesInputSchema } from './TriggerUncheckedUpdateWithoutDocumentRulesInputSchema';

export const TriggerUpdateToOneWithWhereWithoutDocumentRulesInputSchema: z.ZodType<Prisma.TriggerUpdateToOneWithWhereWithoutDocumentRulesInput> = z.object({
  where: z.lazy(() => TriggerWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TriggerUpdateWithoutDocumentRulesInputSchema),z.lazy(() => TriggerUncheckedUpdateWithoutDocumentRulesInputSchema) ]),
}).strict() as z.ZodType<Prisma.TriggerUpdateToOneWithWhereWithoutDocumentRulesInput>;

export default TriggerUpdateToOneWithWhereWithoutDocumentRulesInputSchema;
