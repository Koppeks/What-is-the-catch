import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerCreateWithoutDocumentRulesInputSchema } from './TriggerCreateWithoutDocumentRulesInputSchema';
import { TriggerUncheckedCreateWithoutDocumentRulesInputSchema } from './TriggerUncheckedCreateWithoutDocumentRulesInputSchema';
import { TriggerCreateOrConnectWithoutDocumentRulesInputSchema } from './TriggerCreateOrConnectWithoutDocumentRulesInputSchema';
import { TriggerUpsertWithoutDocumentRulesInputSchema } from './TriggerUpsertWithoutDocumentRulesInputSchema';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerUpdateToOneWithWhereWithoutDocumentRulesInputSchema } from './TriggerUpdateToOneWithWhereWithoutDocumentRulesInputSchema';
import { TriggerUpdateWithoutDocumentRulesInputSchema } from './TriggerUpdateWithoutDocumentRulesInputSchema';
import { TriggerUncheckedUpdateWithoutDocumentRulesInputSchema } from './TriggerUncheckedUpdateWithoutDocumentRulesInputSchema';

export const TriggerUpdateOneRequiredWithoutDocumentRulesNestedInputSchema: z.ZodType<Prisma.TriggerUpdateOneRequiredWithoutDocumentRulesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TriggerCreateWithoutDocumentRulesInputSchema), z.lazy(() => TriggerUncheckedCreateWithoutDocumentRulesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TriggerCreateOrConnectWithoutDocumentRulesInputSchema).optional(),
  upsert: z.lazy(() => TriggerUpsertWithoutDocumentRulesInputSchema).optional(),
  connect: z.lazy(() => TriggerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TriggerUpdateToOneWithWhereWithoutDocumentRulesInputSchema), z.lazy(() => TriggerUpdateWithoutDocumentRulesInputSchema), z.lazy(() => TriggerUncheckedUpdateWithoutDocumentRulesInputSchema) ]).optional(),
});

export default TriggerUpdateOneRequiredWithoutDocumentRulesNestedInputSchema;
